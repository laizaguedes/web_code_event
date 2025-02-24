'use client'

import { IconButton } from "@/components/icon-button";
import { InputFieldIcon, InputIcon, InputRoot } from "@/components/input";
import { Copy, Link } from "lucide-react";

interface InviteLinkInputProps{
    inviteLink: string
}

export function InviteLinkInput({inviteLink} : InviteLinkInputProps) {
    function copyInviteLink(){
        navigator.clipboard.writeText(inviteLink)
    }

    return (
        <InputRoot>
            <InputIcon>
                <Link className="size-5" />
            </InputIcon>
            <InputFieldIcon
                readOnly
                defaultValue={inviteLink}
            />

            <IconButton className='-mr-2' onClick={copyInviteLink}>
                <Copy className="size-5" />
            </IconButton>
        </InputRoot>
    )
}