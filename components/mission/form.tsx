"use client";
import { addMission } from "@/app/mission/actions";
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
        name="mission"
        required
        placeholder="Add a new mission"
      />
      <input
        disabled={pending}
        minLength={2}
        name="mission"
        required
        placeholder="Add a brand"
      />
      <input
        disabled={pending}
        minLength={2}
        name="mission"
        required
        type="date"
        placeholder="Add periode"
      />
      <input
        disabled={pending}
        minLength={2}
        name="mission"
        required
        placeholder="Add amount"
      />
      <Button type="submit" size="icon" className="min-w-10" disabled={pending}>
        <Send className="h-5 w-5" />
        <span className="sr-only">Submit</span>
      </Button>
    </>
  );
}

export function MissionForm() {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <Card>
      <CardContent className="p-3">
        <form
          ref={formRef}
          className="flex gap-4"
          action={async (data) => {
            await addMission(data);
            formRef.current?.reset();
          }}
        >
          <FormContent />
        </form>
      </CardContent>
    </Card>
  );
}
