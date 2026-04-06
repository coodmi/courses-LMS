<?php

namespace Modules\PageEditor\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Modules\PageEditor\Models\ProjectPage;

class StorePageRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'project_id' => 'required|exists:projects,id',
            'title' => 'required|string|unique:' . ProjectPage::class,
            'url' => 'required|string|unique:' . ProjectPage::class,
            'description' => 'nullable|string',
            'type' => 'required|string|in:home,inner',
        ];
    }
}
