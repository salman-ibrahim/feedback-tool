import { CommentProps } from "@/types";
import { formatDate } from "@/utils/helper";
import MarkdownView from "./MarkdownView";

export default function CommentView ({ comment }: CommentProps) {
  return (
    <div className="flex-1 bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md">
        <div className="flex items-center mb-2">
            <div>
            <p className="text-sm font-semibold text-gray-800 dark:text-white">{comment.user.name} • <span className="text-xs text-gray-500 dark:text-gray-400">{formatDate(comment.created_at)}</span></p>
            </div>
        </div>
        <MarkdownView markdown={comment.body} />
    </div>
  );
};
