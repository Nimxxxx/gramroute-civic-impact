import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Camera, 
  MapPin, 
  Upload, 
  Image as ImageIcon,
  Video,
  ArrowLeft,
  Loader2
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const ReportSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentLocation, setCurrentLocation] = useState("Getting location...");

  // Simulate getting current location
  useState(() => {
    setTimeout(() => {
      setCurrentLocation("Main St & 5th Ave, Campus Area");
    }, 2000);
  });

  const handleSubmit = () => {
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      // Redirect to dashboard with success message
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-soft">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/dashboard">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <div className="flex items-center space-x-2">
              <MapPin className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-foreground">Report Issue</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Card className="bg-gradient-card shadow-medium">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Report a Civic Issue</CardTitle>
            <CardDescription>
              Help improve your community by reporting issues that need attention
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Media Upload */}
            <div className="space-y-4">
              <Label className="text-foreground text-base font-medium">
                Photo/Video Evidence
              </Label>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <Camera className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-2">Take Photo</p>
                  <Button variant="outline" size="sm">
                    <Camera className="h-4 w-4 mr-2" />
                    Open Camera
                  </Button>
                </div>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-2">Upload File</p>
                  <Button variant="outline" size="sm">
                    <Upload className="h-4 w-4 mr-2" />
                    Choose File
                  </Button>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label className="text-foreground text-base font-medium">Location</Label>
              <div className="flex items-center space-x-3 p-4 bg-background rounded-lg border border-border">
                <MapPin className="h-5 w-5 text-primary" />
                <div className="flex-1">
                  <p className="font-medium text-foreground">{currentLocation}</p>
                  <p className="text-sm text-muted-foreground">Auto-detected location</p>
                </div>
                <Button variant="outline" size="sm">
                  Update
                </Button>
              </div>
            </div>

            {/* Category */}
            <div className="space-y-2">
              <Label htmlFor="category" className="text-foreground text-base font-medium">
                Issue Category
              </Label>
              <Select>
                <SelectTrigger className="bg-background border-border">
                  <SelectValue placeholder="Select issue category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="roads">Roads & Infrastructure</SelectItem>
                  <SelectItem value="waste">Waste Management</SelectItem>
                  <SelectItem value="water">Water & Drainage</SelectItem>
                  <SelectItem value="lighting">Street Lighting</SelectItem>
                  <SelectItem value="safety">Public Safety</SelectItem>
                  <SelectItem value="environment">Environment</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title" className="text-foreground text-base font-medium">
                Issue Title
              </Label>
              <Input 
                id="title"
                placeholder="Brief, descriptive title (e.g., 'Broken street light on Main St')"
                className="bg-background border-border"
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description" className="text-foreground text-base font-medium">
                Detailed Description
              </Label>
              <Textarea 
                id="description"
                placeholder="Provide details about the issue, when you noticed it, and any safety concerns..."
                className="bg-background border-border min-h-[120px]"
              />
            </div>

            {/* Priority Level */}
            <div className="space-y-2">
              <Label htmlFor="priority" className="text-foreground text-base font-medium">
                Priority Level
              </Label>
              <Select>
                <SelectTrigger className="bg-background border-border">
                  <SelectValue placeholder="How urgent is this issue?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low - Minor inconvenience</SelectItem>
                  <SelectItem value="medium">Medium - Needs attention</SelectItem>
                  <SelectItem value="high">High - Safety concern</SelectItem>
                  <SelectItem value="urgent">Urgent - Immediate danger</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button 
                variant="cta" 
                size="lg" 
                className="w-full"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                    Submitting Report...
                  </>
                ) : (
                  <>
                    <Upload className="h-5 w-5 mr-2" />
                    Submit Report
                  </>
                )}
              </Button>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Your report will be reviewed and forwarded to the appropriate authorities
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReportSubmission;