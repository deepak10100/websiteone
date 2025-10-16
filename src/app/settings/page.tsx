
"use client";

import { useTheme } from '@/components/providers/theme-provider';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useUserContext } from '@/components/providers/user-provider';
import { Skeleton } from '@/components/ui/skeleton';

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const { user, loading } = useUserContext();

  if (loading) {
    return (
       <div className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
        <Skeleton className="h-10 w-48 mb-8" />
        <div className="space-y-8">
            <Skeleton className="h-64 w-full" />
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-32 w-full" />
        </div>
      </div>
    )
  }

  if (!user) {
        return (
            <div className="container mx-auto px-4 md:px-6 py-12 text-center">
                 <h1 className="text-2xl font-bold">Please log in</h1>
                 <p className="text-muted-foreground">You need to be logged in to manage your settings.</p>
            </div>
        )
  }

  return (
    <div className="animate-fade-in">
        <div className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
            <header className="mb-8">
                <h1 className="text-3xl font-headline font-bold tracking-tight">Settings</h1>
                <p className="text-muted-foreground">Manage your account and application settings.</p>
            </header>

            <div className="space-y-8">
                {/* Appearance Settings */}
                <Card>
                    <CardHeader>
                        <CardTitle>Appearance</CardTitle>
                        <CardDescription>Customize the look and feel of the application.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <Label>Theme</Label>
                            <RadioGroup
                                defaultValue={theme}
                                onValueChange={(value: "light" | "dark") => setTheme(value)}
                                className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                            >
                                <div>
                                    <RadioGroupItem value="light" id="light" className="peer sr-only" />
                                    <Label htmlFor="light" className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                                        <Sun className="mb-2 h-6 w-6" />
                                        Light
                                    </Label>
                                </div>
                                <div>
                                    <RadioGroupItem value="dark" id="dark" className="peer sr-only" />
                                    <Label htmlFor="dark" className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                                        <Moon className="mb-2 h-6 w-6" />
                                        Dark
                                    </Label>
                                </div>
                            </RadioGroup>
                        </div>
                    </CardContent>
                </Card>

                {/* Notification Settings */}
                <Card>
                    <CardHeader>
                        <CardTitle>Notifications</CardTitle>
                        <CardDescription>Manage how you receive notifications from us.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <Label htmlFor="promotions" className="font-semibold">Promotional Emails</Label>
                                <p className="text-sm text-muted-foreground">Receive updates on new services and special offers.</p>
                            </div>
                            <Switch id="promotions" defaultChecked />
                        </div>
                        <Separator />
                         <div className="flex items-center justify-between">
                             <div>
                                <Label htmlFor="invoices" className="font-semibold">Invoices & Billing</Label>
                                <p className="text-sm text-muted-foreground">Receive emails for invoices and payment confirmations.</p>
                            </div>
                            <Switch id="invoices" defaultChecked />
                        </div>
                        <Separator />
                         <div className="flex items-center justify-between">
                             <div>
                                <Label htmlFor="newsletter" className="font-semibold">Newsletter</Label>
                                <p className="text-sm text-muted-foreground">Get our monthly newsletter with tips and articles.</p>
                            </div>
                            <Switch id="newsletter" />
                        </div>
                    </CardContent>
                </Card>

                {/* Account Settings */}
                 <Card>
                    <CardHeader>
                        <CardTitle>Account</CardTitle>
                        <CardDescription>Manage your account settings.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between rounded-lg border border-destructive/50 p-4">
                            <div>
                                <h4 className="font-semibold">Delete Account</h4>
                                <p className="text-sm text-muted-foreground">Permanently delete your account and all associated data. This action cannot be undone.</p>
                            </div>
                            <Button variant="destructive">Delete</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
  );
}
