export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

type Feedback = {
    id: number;
    user_id: number;
    title: string;
    description: string;
    category: string;
    deleted_at: string | null;
    created_at: string;
    updated_at: string;
    comments_count: number;
    comments: Comment[];
    user: User;
};
  
type Link = {
    url: string | null;
    label: string;
    active: boolean;
};

type Comment = {
    id: number;
    feedback_id: number;
    user_id: number;
    body: string;
    deleted_at: string | null;
    created_at: string;
    updated_at: string;
    user: User;
};

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    feedbacks: {
        current_page: number;
        data: Feedback[];
        first_page_url: string;
        from: number;
        last_page: number;
        last_page_url: string;
        links: Link[];
        next_page_url: string | null;
        path: string;
        per_page: number;
        prev_page_url: string | null;
        to: number;
        total: number;
    };
    feedback: Feedback;
};

export type FeedbackProps = {
    auth: {
        user: User;
    };
    feedback: {
        id: number;
        title: string;
        description: string;
        category: string;
    }
};

export type PaginationProps = {
    links: Link[];
};

export type CommentProps = {
    comment: Comment;
};