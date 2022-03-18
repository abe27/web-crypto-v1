<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard.index');
Route::get('/trend', function () {
    return Inertia::render('Trend');
})->middleware(['auth', 'verified'])->name('trend.index');
Route::get('/investment', function () {
    return Inertia::render('Investment');
})->middleware(['auth', 'verified'])->name('investment.index');
Route::get('/api-data', function () {
    return Inertia::render('ApiData');
})->middleware(['auth', 'verified'])->name('api-data.index');
Route::get('/blog', function () {
    return Inertia::render('Blog');
})->middleware(['auth', 'verified'])->name('blog.index');

require __DIR__.'/auth.php';
