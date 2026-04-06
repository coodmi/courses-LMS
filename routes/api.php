<?php

use App\Http\Controllers\Api\FrontendCollectionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Modules\Installer\Http\Middleware\InstallerRoutes;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Collection Routes
Route::prefix('collections')->group(function () {
    // Public routes - Get collection data
    Route::get('/', [FrontendCollectionController::class, 'index']);
    Route::get('/{type}/{category}', [FrontendCollectionController::class, 'show']);

    // Admin only routes - Update collection data
    Route::middleware(['auth:sanctum', 'admin'])->group(function () {
        Route::match(['put', 'patch'], '/{type}/{category}', [FrontendCollectionController::class, 'update']);
        Route::post('/{type}/{category}/toggle', [FrontendCollectionController::class, 'toggle']);
    });
});
