<?php

// use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\ReviewController;

// Books
Route::get('/books', [BookController::class, 'index'])->name('books.index');

// Authors
Route::get('/authors', [AuthorController::class, 'index'])->name('authors.index');

// Reviews
Route::get('/books/{book}/reviews', [ReviewController::class, 'index'])->name('reviews.index');
