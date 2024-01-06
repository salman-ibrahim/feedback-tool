<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'feedback_id' => ['required', 'exists:feedback,id'],
            'comment' => ['required', 'min:1'],
        ]);

        Comment::create([
            'user_id' => auth()->user()->id,
            'commentable_id' => $request->feedback_id,
            'commentable_type' => 'App\Models\Feedback',
            'body' => $request->comment,
        ]);

        return redirect()->route('feedback.show', $request->feedback_id);
    }
}
