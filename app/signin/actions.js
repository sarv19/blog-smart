"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export async function login(formData, redirectUrl) {
    const supabase = createClient();

    const data = {
        email: formData.get("email"),
        password: formData.get("password"),
    };

    const { error } = await supabase.auth.signInWithPassword(data);

    if (error) {
        return "Sorry, wrong username or password";
    }

    revalidatePath("/", "layout");
    redirect(redirectUrl || "/");
}

export async function signup(formData) {
    const supabase = createClient();

    const data = {
        email: formData.email,
        password: formData.password,
    };

    const { error } = await supabase.auth.signUp(data);

    if (error) {
        console.log(error);
        return { status: 500, message: "Sorry, unable to sign up" };
    }

    revalidatePath("/", "layout");
    return {
        status: 200,
        message: "Signed up successfully, please verify your email",
    };
}
