<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use App\Http\Resources\AuthorResource;
use App\Http\Resources\ReviewResource;
use Illuminate\Http\Resources\Json\JsonResource;

class BookResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $author = $this->whenLoaded('author');
        return [
            'title' => $this->title,
            'author' => new AuthorResource($author),
            'reviews' => ReviewResource::collection($this->whenLoaded('reviews')),
        ];
    }
}
