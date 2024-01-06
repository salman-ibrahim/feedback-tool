import React from 'react';
import Markdown from 'react-markdown';

const MarkdownView: React.FC<{ markdown: string }> = ({ markdown }) => {
    return (
        <Markdown 
            className="flex-1 text-gray-800 dark:text-white overflow-auto"
            components={{
                code({node, className, children, ...props}) {
                    const match = /language-(\w+)/.exec(className || '')
                    return match ? (
                        <pre className="text-gray-800 dark:text-white bg-slate-500 dark:bg-black px-2 rounded-md overflow-auto">
                            <code className={className} {...props}>
                                {children}
                            </code>
                        </pre>
                    ) : (
                        <code className={`${className} bg-slate-500 dark:bg-black rounded-md px-1`} {...props}>
                            {children}
                        </code>
                    )
                },
                a({node, className, children, ...props}) {
                    return (
                        <a className="text-blue-500 dark:text-blue-400 hover:underline" {...props}>
                            {children}
                        </a>
                    )
                }
            }}
        >
            {markdown}
        </Markdown>
    );
};

export default MarkdownView;
