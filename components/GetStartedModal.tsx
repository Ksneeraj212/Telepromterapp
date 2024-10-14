"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetStartedModal = ({ isOpen, onClose }: GetStartedModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Get Started with TelePrompter</DialogTitle>
          <DialogDescription>
            Follow these steps to begin your journey with our teleprompter application.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <ol className="list-decimal list-inside space-y-2">
            <li>Create an account or log in</li>
            <li>Upload your script or start writing</li>
            <li>Customize your teleprompter settings</li>
            <li>Start your presentation!</li>
          </ol>
        </div>
        <DialogFooter>
          <Button onClick={onClose}>Close</Button>
          <Button variant="default">Create Account</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default GetStartedModal;