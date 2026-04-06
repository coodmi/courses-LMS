<?php

use App\Http\Controllers\Api\FrontendCollectionController;
use Illuminate\Support\Facades\Route;
use Modules\PageEditor\Http\Controllers\PageController;
use Modules\PageEditor\Http\Controllers\PageEditorController;
use Modules\PageEditor\Http\Controllers\ProjectController;

Route::middleware(['auth', 'verified'])->group(function () {
    // Route::resource('pageeditors', PageEditorController::class)->names('pageeditor');

    Route::get('projects', [ProjectController::class, 'index'])->name('projects.index');
    Route::get('projects/{project}', [ProjectController::class, 'show'])->name('projects.show');
    Route::resource('projects', ProjectController::class)->only(['store', 'destroy']);
    Route::post('projects/{project}', [ProjectController::class, 'update'])->name('projects.update');

    Route::get('dashboard/frontend/api', [FrontendCollectionController::class, 'index'])->name('frontend.api');
    Route::put('dashboard/frontend/api', [FrontendCollectionController::class, 'update'])->name('frontend.api');
    Route::resource('dashboard/frontend/pages', PageController::class)->only(['index', 'store', 'destroy']);
    Route::post('dashboard/frontend/pages/{page}', [PageController::class, 'update'])->name('pages.update');
    Route::get('frontend/pages/{page}', [PageController::class, 'show'])->name('page.show');

    Route::get('editor/{project}/{page}', [PageController::class, 'editor'])->name('page.editor');
    Route::put('editor/{project}/{page}', [PageController::class, 'content'])->name('page.content');

    Route::post('projects/image/store', [ProjectController::class, 'storeImage'])->name('project.store-image');
    Route::delete('projects/image/{project}/{image}', [ProjectController::class, 'destroyImage'])->name('project.delete-image');
    Route::post('projects/settings/{project}', [ProjectController::class, 'settings'])->name('projects.settings');
});

// Page Data Storage Routes
Route::get('frontend/seeder', [FrontendCollectionController::class, 'seeder'])->name('frontend.seeder');
Route::post('api/store-page/{slug}', [FrontendCollectionController::class, 'storePage']);
