import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import PrimaryButton from '@/Components/PrimaryButton';
import { useState } from 'react';
import NewFeedback from '@/Pages/Feedbacks/NewFeedback';
import Feedbacks from '@/Pages/Feedbacks';
import Pagination from '@/Components/Pagination';

export default function Feed({ auth, feedbacks }: PageProps) {

    const [showCreateFeedbackModal, setShowCreateFeedbackModal] = useState(false);

    const toggleCreateFeedbackModal = () => {
        setShowCreateFeedbackModal(!showCreateFeedbackModal);
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Feed</h2>}
        >
            <Head title="Feed" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid justify-end mb-4">
                    {/* Trigger Create Feedback Modal */}
                    <PrimaryButton className="p-6 text-gray-900 dark:text-gray-100" onClick={toggleCreateFeedbackModal}>
                        Write Feedback
                    </PrimaryButton>
                </div>

                {/* List all the Feedback */}
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-2">
                        <Feedbacks feedbacks={feedbacks.data} />
                    </div>
                    <Pagination links={feedbacks.links} />
                </div>
            </div>

            {/* Create Feedback Modal */}
            <NewFeedback show={showCreateFeedbackModal} onClose={toggleCreateFeedbackModal} />
        </AuthenticatedLayout>
    );
}
