"use client";
import { addTypeOfWaste } from "@/app/waste_type/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useRef } from "react";

import { useFormStatus } from "react-dom";

function FormContent() {
  const { pending } = useFormStatus();
  return (
    <>
      <input
        disabled={pending}
        minLength={2}
        name="type_of_waste"
        required
        placeholder="Add a new type of waste"
      />
      <Button type="submit" size="icon" className="min-w-10" disabled={pending}>
        <Send className="h-5 w-5" />
        <span className="sr-only">Submit</span>
      </Button>
    </>
  );
}

export function TypeOfWasteForm() {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <Card>
      <CardContent className="p-3">
        <form
          ref={formRef}
          className="flex gap-4"
          action={async (data) => {
            await addTypeOfWaste(data);
            formRef.current?.reset();
          }}
        >
          <FormContent />
        </form>
      </CardContent>
    </Card>
  );
}
