<?php

use Illuminate\Support\Facades\Route;
use Modules\PageEditor\Http\Controllers\PageEditorController;

Route::middleware(['auth:sanctum'])->prefix('v1')->group(function () {
    Route::apiResource('pageeditors', PageEditorController::class)->names('pageeditor');
});
