<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use App\Http\Resources\ReviewResource;
use Illuminate\Http\Resources\Json\JsonResource;

class BookReviewResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'title' => $this->title,
            'cover_img' => $this->cover_img,
            'author' => new AuthorResource($this->author),
            'reviews' => ReviewResource::collection($this->reviews),   
        ];
    }
}
