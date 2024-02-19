<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth ;

class BlogController extends Controller
{

    public function index($id=null){

        if($id){
            $blog = Blog::where('status' , 'active')->find($id);

            if ($blog) {
                // Assuming 'public' disk is used and 'blog_images' is a directory in storage/app/public
                $blog->image = Storage::disk('public')->url('blog_images/' . $blog->image);

                // Calculate elapsed time
                $elapsedTime = $blog->created_at->diffForHumans();

                // Add elapsed time to the response
                $blog->elapsedTime = $elapsedTime;
            }

            return response()->json(["data" => $blog]);
        } else {
            $blogs = Blog::where('status' , 'active')->get();

            $blogs->transform(function ($blog) {
                // Assuming 'public' disk is used and 'blog_images' is a directory in storage/app/public
                $blog->image = Storage::disk('public')->url('blog_images/' . $blog->image);

                // Calculate elapsed time
                $elapsedTime = $blog->created_at->diffForHumans();

                // Add elapsed time to the response
                $blog->elapsedTime = $elapsedTime;

                return $blog;
            });

            return response()->json(["data" => $blogs]);
        }
    }


    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'image' => 'required|image',
            'status' => 'required|string',
        ]);
        $user = Auth::guard('sanctum')->user();

        // Handle file upload
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('public/blog_images');
            $image = basename($imagePath);
        }

        $blog = new Blog();
        $blog->title = $request->title;
        $blog->content = $request->content;
        $blog->image = $image ?? ''; // Store the image name or path
        $blog->status = $request->status;
        $blog->user_id = $user->id;
        $blog->save();

        return response()->json(['message' => 'Blog post created successfully', 'blog' => $blog], 201);
    }
}
