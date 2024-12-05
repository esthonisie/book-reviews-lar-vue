<?php

// use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;
use App\Http\Controllers\AuthorController;

// Books
Route::get('/books', [BookController::class, 'index'])->name('books.index');

// Authors
Route::get('/authors', [AuthorController::class, 'index'])->name('authors.index');
