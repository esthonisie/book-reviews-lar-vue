<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Http\Resources\ReviewResource;

class BookReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Book $book)
    {
        return ReviewResource::collection($book->reviews);
    }
}
