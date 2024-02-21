<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    //
    public function index($id=null){
        $comment = Comment::with('users')->where('blog_id', $id)->get();
        $comment->transform(function ($comment) {
            // Check if created_at is not null
            if ($comment->created_at !== null) {
                $elapsedTime = $comment->created_at->diffForHumans();
                $comment->elapsedTime = $elapsedTime;
            } else {
                // Handle the case where created_at is null
                // For example, set elapsedTime to a default message
                $comment->elapsedTime = "Timestamp not available";
            }

            return $comment;
        });
        return response()->json($comment);
    }

    public function store(Request $request)
    {
        $request->validate([
            'comment' => 'required',
            'blog_id' => 'required',
        ]);
        $user = Auth::guard('sanctum')->user();

        $Comment = new Comment();
        $Comment->comment = $request->comment;
        $Comment->blog_id = $request->blog_id;
        $Comment->user_id = $user->id ?? ''; // Store the image name or path
        $Comment->save();

        return response()->json(['message' => 'Blog post created successfully', 'Comment' => $Comment], 201);
    }

    public function like($id)
    {
        $blog = Comment::find($id);
        if ($blog) {
            $blog->increment('like'); // Assuming 'likes' is the column name
            return response()->json(['message' => 'Successfully liked']);
        }
        return response()->json(['error' => 'Blog not found'], 404);
    }

    // Method to decrement likes
    public function unlike($id)
    {
        $blog = Comment::find($id);
        if ($blog && $blog->likes > 0) {
            $blog->decrement('like');
            return response()->json(['message' => 'Successfully unliked']);
        }
        return response()->json(['error' => 'Blog not found or no likes to remove'], 404);
    }

}
