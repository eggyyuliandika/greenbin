"use client";
import { addMissionRedeem } from "@/app/mission_redeem/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
        placeholder="Add a mission"
      />
      <input
        disabled={pending}
        minLength={2}
        name="mission"
        required
        type="date"
        placeholder="Add a time"
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

export function MissionRedeemForm() {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <Card>
      <CardContent className="p-3">
        <form
          ref={formRef}
          className="flex gap-4"
          action={async (data) => {
            await addMissionRedeem(data);
            formRef.current?.reset();
          }}
        >
          <FormContent />
        </form>
      </CardContent>
    </Card>
  );
}
