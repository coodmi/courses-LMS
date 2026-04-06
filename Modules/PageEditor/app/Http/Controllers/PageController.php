<?php

namespace Modules\PageEditor\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Services\PageService;
use Modules\PageEditor\Models\ProjectPage;
use Modules\PageEditor\Models\Project;
use Modules\PageEditor\Services\ProjectPageService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Modules\PageEditor\Http\Requests\StorePageRequest;
use Modules\PageEditor\Http\Requests\UpdatePageRequest;

class PageController extends Controller
{
    protected PageService $pageService;
    protected ProjectPageService $projectPageService;

    public function __construct()
    {
        $this->pageService = new PageService();
        $this->projectPageService = new ProjectPageService();
    }

    public function index()
    {
        $project = Project::query()->with('pages')->first();

        return Inertia::render('frontend/pages', compact('project'));
    }

    public function show(Request $request, ProjectPage $page)
    {
        $page->load('project');

        return Inertia::render('frontend/index', [
            'page' => $page,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePageRequest $request)
    {
        $this->projectPageService->createPage($request->validated());

        return back()->with('success', 'A new page successfully added');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePageRequest $request, ProjectPage $page)
    {
        $this->projectPageService->updatePage($page, $request->validated());

        $message = $request->status ? 'Page status updated successfully!' : 'Page updated successfully!';

        return back()->with('success', $message);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ProjectPage $page)
    {
        $project = Project::query()->find($page->project_id);
        $firstPage = $project->pages()->first();

        if ($project->pages()->count() > 1) {
            $page->delete();
        }

        return redirect()->route('builder.index', [
            'page' => $firstPage->id,
            'project' => $project->id,
        ])->with('success', 'An existing project successfully deleted');
    }

    /**
     * Display the specified page.
     */
    public function editor(Request $request, Project $project, ProjectPage $page)
    {
        if ($page->project_id !== $project->id) {
            abort(403, 'Unauthorized access to this page.');
        }

        // Load media collection for the project
        $project->load(['media' => function ($query) {
            $query->orderBy('created_at', 'desc');
        }]);

        $sections = $this->pageService->getPageSections($request->all(), app('intro_page'));

        return Inertia::render('editor/index', [
            'project' => $project,
            'page' => $page,
            ...$sections,
        ]);
    }

    /**
     * Update the specified page.
     */
    public function content(Request $request, Project $project, ProjectPage $page)
    {
        if ($page->project_id !== $project->id) {
            abort(403, 'Unauthorized access to this page.');
        }

        $validated = $request->validate([
            'content' => 'sometimes|json',
        ]);

        DB::beginTransaction();
        try {
            $page->update($validated);

            DB::commit();

            return back();
        } catch (\Exception $e) {
            DB::rollBack();
            return back()->withErrors(['error' => 'Failed to update page. Please try again.']);
        }
    }
}
