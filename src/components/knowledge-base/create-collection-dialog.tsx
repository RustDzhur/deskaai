// import { Label, Input } from "theme-ui"
import {useHistory} from 'react-router-dom';
import {Button} from '../common/deska-kit-base/button';
import {Label} from '../common/deska-kit-base/label';
import {Input} from '../common/deska-kit-base/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../common/deska-kit-base/dialog';
import {createKnowledgeBaseCollection, fetchUrlSitemaps} from '../../api';
import {useState} from 'react';
import {create} from 'zustand';
import {useForm} from '../common/use-form';
import {toast} from 'react-hot-toast';
import {Textarea} from '../common/deska-kit-base/textarea';

interface CreateCollectionForm {
  name: string;
  description: string;
}
export const useCreateCollectionDialog = create<{
  open: boolean;
  setOpen: (open: boolean) => void;
  form: CreateCollectionForm;
  setForm: (form: CreateCollectionForm) => void;
}>((set) => ({
  open: false,
  setOpen: (open: boolean) => set({open}),
  form: {
    name: '',
    description: '',
  },
  setForm: (form) => set({form}),
}));

export const CreateCollectionDialog = () => {
  const history = useHistory();
  const [
    open,
    setOpen,
    // form,
    // setForm,
  ] = useCreateCollectionDialog((state) => [
    state.open,
    state.setOpen,
    // state.form,
    // state.setForm,
  ]);

  const onSubmitForm = async () => {
    // created a collection
    try {
      const collection = await createKnowledgeBaseCollection({
        ...form.values,
      });

      setOpen(false);
      toast.success('Collection created successfully');
      history.push(`/knowledge-base/${collection?.id}/upload`);
    } catch (error) {
      toast.error('Error creating collection');
    }
  };

  const form = useForm({
    initialValues: {
      name: '',
      description: '',
    },
    onSubmit: onSubmitForm,
    validate: (values) => {
      const errors = {};
      // if (!values.name) {
      //   toast.error("Name is required");
      // }
      return errors;
    },
  });
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a Collection</DialogTitle>
          <DialogDescription>
            Collection is a group of documents that share a common theme
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={form.handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-2">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                required
                name="name"
                value={form.values.name}
                onChange={form.handleChange}
                type="text"
                placeholder="e.g Website knowledge base"
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-2">
              <Label htmlFor="name" className="text-right">
                Description
              </Label>
              <Textarea
                name="description"
                value={form.values.description}
                onChange={form.handleChange}
                placeholder="e.g This collection is about our website domain knowledge"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" loading={form.isSubmitting}>
              Create collection
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
