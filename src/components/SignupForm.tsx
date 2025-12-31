import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Loader2, CheckCircle } from "lucide-react";

// Replace this with your actual Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL";

interface FormData {
  email: string;
  zipCode: string;
  interest: string;
  childrenCount: string;
}

export function SignupForm() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    zipCode: "",
    interest: "",
    childrenCount: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email) {
      toast.error("Please enter your email address");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      // If using Google Apps Script
      if (GOOGLE_SCRIPT_URL !== "YOUR_GOOGLE_APPS_SCRIPT_URL") {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            zipCode: formData.zipCode || "Not provided",
            interest: formData.interest || "Not specified",
            childrenCount: formData.childrenCount || "Not provided",
            timestamp: new Date().toISOString(),
          }),
        });
      }

      setIsSubmitted(true);
      toast.success("Thanks for signing up! We'll be in touch soon.");
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-16 h-16 text-brand-green mx-auto mb-4" />
        <h3 className="font-display text-2xl font-bold mb-2">You're on the list!</h3>
        <p className="text-muted-foreground">
          We'll keep you updated on the Brooklyn Bicycle Library launch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email" className="text-foreground font-medium">
          Email address <span className="text-brand-red">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="h-12 text-base"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="zipCode" className="text-foreground font-medium">
          Zip code <span className="text-muted-foreground text-sm">(optional)</span>
        </Label>
        <Input
          id="zipCode"
          type="text"
          placeholder="11201"
          value={formData.zipCode}
          onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
          className="h-12 text-base"
          maxLength={10}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="interest" className="text-foreground font-medium">
          Primary interest <span className="text-muted-foreground text-sm">(optional)</span>
        </Label>
        <Select
          value={formData.interest}
          onValueChange={(value) => setFormData({ ...formData, interest: value })}
        >
          <SelectTrigger className="h-12 text-base">
            <SelectValue placeholder="Select your main interest" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="family-transport">Family transportation</SelectItem>
            <SelectItem value="grocery-errands">Groceries & errands</SelectItem>
            <SelectItem value="commuting">Commuting to work</SelectItem>
            <SelectItem value="car-replacement">Replacing car trips</SelectItem>
            <SelectItem value="recreation">Recreation & fun</SelectItem>
            <SelectItem value="curious">Just curious!</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="children" className="text-foreground font-medium">
          Children under 12 <span className="text-muted-foreground text-sm">(optional)</span>
        </Label>
        <Select
          value={formData.childrenCount}
          onValueChange={(value) => setFormData({ ...formData, childrenCount: value })}
        >
          <SelectTrigger className="h-12 text-base">
            <SelectValue placeholder="How many?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">None</SelectItem>
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="3">3</SelectItem>
            <SelectItem value="4+">4 or more</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-12 text-base font-semibold bg-brand-orange hover:bg-brand-red transition-colors"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Signing up...
          </>
        ) : (
          "Get updates"
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        We'll only send occasional updates. No spam, ever.
      </p>
    </form>
  );
}
