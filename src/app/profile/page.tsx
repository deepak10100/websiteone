
"use client";

import { useUserContext } from '@/components/providers/user-provider';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

export default function ProfilePage() {
    const { user, loading } = useUserContext();

    if (loading) {
        return (
            <div className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
                <Skeleton className="h-10 w-48 mb-8" />
                <div className="space-y-8">
                    <Skeleton className="h-48 w-full" />
                    <Skeleton className="h-64 w-full" />
                </div>
            </div>
        )
    }

    if (!user) {
        return (
            <div className="container mx-auto px-4 md:px-6 py-12 text-center">
                 <h1 className="text-2xl font-bold">Please log in</h1>
                 <p className="text-muted-foreground">You need to be logged in to view your profile.</p>
            </div>
        )
    }

    const [firstName, lastName] = user.displayName?.split(' ') || ['', ''];
    const fallback = user.displayName?.charAt(0).toUpperCase() || 'U';

    return (
        <div className="animate-fade-in">
            <div className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
                <header className="mb-8">
                    <h1 className="text-3xl font-headline font-bold tracking-tight">Your Profile</h1>
                    <p className="text-muted-foreground">Manage your personal information and account settings.</p>
                </header>

                <div className="space-y-8">
                    {/* Personal Information */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Personal Information</CardTitle>
                            <CardDescription>Update your photo and personal details here.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center gap-6">
                                <Avatar className="h-20 w-20">
                                    <AvatarImage src={user.photoURL || undefined} alt={user.displayName || 'User'} />
                                    <AvatarFallback>{fallback}</AvatarFallback>
                                </Avatar>
                                <div className="space-y-1">
                                    <h3 className="font-semibold">{user.displayName}</h3>
                                    <p className="text-sm text-muted-foreground">{user.email}</p>
                                </div>
                            </div>
                            <Separator />
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">First Name</Label>
                                    <Input id="firstName" defaultValue={firstName} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Input id="lastName" defaultValue={lastName} />
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <Button>Update Profile</Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Change Password */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Change Password</CardTitle>
                            <CardDescription>For your security, we recommend choosing a strong password.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                             <div className="space-y-2">
                                <Label htmlFor="currentPassword">Current Password</Label>
                                <Input id="currentPassword" type="password" />
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="newPassword">New Password</Label>
                                <Input id="newPassword" type="password" />
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                                <Input id="confirmPassword" type="password" />
                            </div>
                            <div className="flex justify-end">
                                <Button>Change Password</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
