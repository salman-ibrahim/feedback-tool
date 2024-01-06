
import { useForm } from '@inertiajs/react';
import Modal from '@/Components/Modal';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import { FormEventHandler } from 'react';
import SecondaryButton from '@/Components/SecondaryButton';
import PrimaryButton from '@/Components/PrimaryButton';
import SelectInput from '@/Components/SelectInput';
import TextareaInput from '@/Components/TextareaInput';

export default function NewFeedback({ show, onClose }: { show: boolean; onClose: CallableFunction}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        description: '',
        category: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('feedback.store'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => {},
            onFinish: () => {},
        });
    };

    const closeModal = () => {
        onClose();
        reset();
    }

    return (
        <Modal show={show} onClose={onClose}>
            <form onSubmit={submit} className="p-6">
                <div>
                    <InputLabel htmlFor="title">Title</InputLabel>
                    <TextInput
                        id="title"
                        type="text"
                        name="title"
                        value={data.title}
                        className="mt-1 block w-full"
                        autoComplete="title"
                        isFocused={true}
                        onChange={(e) => setData('title', e.target.value)}
                        required
                    />

                    <InputError message={errors.title} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="description">Description</InputLabel>
                    <TextareaInput
                        id="description"
                        // type="text"
                        name="description"
                        value={data.description}
                        className="mt-1 block w-full"
                        autoComplete="description"
                        onChange={(e) => setData('description', e.target.value)}
                        required
                    />

                    <InputError message={errors.description} className="mt-2" />
                </div>
                
                <div className="mt-4">
                    <InputLabel htmlFor="category">Category</InputLabel>
                    <SelectInput
                        id="category"
                        name="category"
                        className="mt-1 block w-full"
                        autoComplete="category"
                        onChange={(e) => setData('category', e.target.value)}
                        required
                    >
                        <option value="" disabled={data.category !== ''}>Select a category</option>
                        <option value="bug">Bug</option>
                        <option value="feature">Feature</option>
                        <option value="enhancement">Enhancement</option>
                        <option value="documentation">Documentation</option>
                        <option value="other">Other</option>
                    </SelectInput>

                    <InputError message={errors.category} className="mt-2" />
                </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>

                        <PrimaryButton className="ms-3" disabled={processing}>
                            Create Feedback
                        </PrimaryButton>
                    </div>
                </form>
            </Modal>
    );
};
