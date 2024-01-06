
import React from 'react';
import { Link } from '@inertiajs/react';
import { PaginationProps } from '@/types';
import he from 'he';

export default function Pagination({ links }: PaginationProps) {

    function getClassName(active: boolean) {
        if(active) {
            return "inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-800 uppercase tracking-widest hover:bg-gray-700 dark:hover:bg-white focus:bg-gray-700 dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150";
        } else{
            return "inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 rounded-md font-semibold text-xs text-gray-700 dark:text-gray-300 uppercase tracking-widest shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-25 transition ease-in-out duration-150";
        }
    }
  
    return (
        links.length > 3 && (
            <div className="mb-4">
                <div className="flex flex-wrap mt-8 gap-2">
                    {links.map((link, key) => (
                        link.url === null ?
                            (
                                <div key={key} className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 rounded-md font-semibold text-xs text-gray-700 dark:text-gray-300 uppercase tracking-widest shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-25 transition ease-in-out duration-150 opacity-25 cursor-not-allowed" >
                                    {he.decode(link.label)}
                                </div>
                            ) 
                            :
                            (
                                <Link
                                    key={key}
                                    className={getClassName(link.active)}
                                    href={ link.url }
                                >
                                    {he.decode(link.label)}
                                </Link>)
                        )
                    )}
                </div>
            </div>
        )
    );
}