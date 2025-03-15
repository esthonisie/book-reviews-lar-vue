<?php

namespace App\Http\Controllers;

// use Illuminate\Http\Request;
use App\Models\Author;
use App\Http\Resources\AuthorResource;
use App\Http\Requests\StoreAuthorRequest;
use App\Http\Requests\UpdateAuthorRequest;

class AuthorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $authors = Author::withCount('books')->with('books')->orderBy('books_count', 'desc')->get();
        $authors = Author::withCount('books')->with('books')->orderBy('books_count')->get();
        return AuthorResource::collection($authors);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAuthorRequest $request)
    {
        $validated = $request->validated();

        return Author::create($validated);
    }

    /**
     * Display the specified resource.
     */
    public function show(Author $author)
    {
        return new AuthorResource($author);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAuthorRequest $request, Author $author)
    {
        $validated = $request->validated();

        $author->update($validated);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Author $author)
    {
        $author->delete();
    }
}