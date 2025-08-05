import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Camera, 
  MapPin, 
  Trophy, 
  Users, 
  Bell, 
  Plus,
  CheckCircle,
  Clock,
  AlertCircle,
  Star,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const recentReports = [
    { id: 1, title: "Broken Street Light", status: "approved", location: "Main St & 5th Ave", date: "2 hours ago" },
    { id: 2, title: "Pothole on Campus Road", status: "pending", location: "University Campus", date: "1 day ago" },
    { id: 3, title: "Overflowing Garbage Bin", status: "resolved", location: "Central Park", date: "3 days ago" },
  ];

  const achievements = [
    { name: "First Reporter", icon: Star, earned: true },
    { name: "Community Hero", icon: Award, earned: true },
    { name: "Super Civic", icon: Trophy, earned: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-soft">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MapPin className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">GramRoute</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link to="/dashboard" className="text-primary font-medium">Home</Link>
            <Link to="/reports" className="text-muted-foreground hover:text-foreground">My Reports</Link>
            <Link to="/leaderboard" className="text-muted-foreground hover:text-foreground">Leaderboard</Link>
            <Link to="/profile" className="text-muted-foreground hover:text-foreground">Profile</Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
            </Button>
            <Button variant="cta" size="sm" asChild>
              <Link to="/report">
                <Plus className="h-4 w-4 mr-2" />
                New Report
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, Alex! 👋</h1>
          <p className="text-muted-foreground">Ready to make a difference in your community today?</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Actions */}
            <Card className="bg-gradient-card shadow-soft">
              <CardHeader>
                <CardTitle className="text-foreground">Quick Actions</CardTitle>
                <CardDescription>What would you like to do today?</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <Button variant="hero" size="lg" className="h-20 flex-col space-y-2" asChild>
                    <Link to="/report">
                      <Camera className="h-8 w-8" />
                      <span>Report Issue</span>
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="h-20 flex-col space-y-2" asChild>
                    <Link to="/map">
                      <MapPin className="h-8 w-8" />
                      <span>View Map</span>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Stats Overview */}
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="bg-gradient-card shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">12</p>
                      <p className="text-muted-foreground">Reports Submitted</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-card shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Trophy className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">1,250</p>
                      <p className="text-muted-foreground">Civic Points</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-card shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <Users className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">#15</p>
                      <p className="text-muted-foreground">Leaderboard Rank</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Reports */}
            <Card className="bg-gradient-card shadow-soft">
              <CardHeader>
                <CardTitle className="text-foreground">Recent Reports</CardTitle>
                <CardDescription>Track the status of your latest submissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentReports.map((report) => (
                    <div key={report.id} className="flex items-center justify-between p-4 bg-background rounded-lg border border-border">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          {report.status === "resolved" && <CheckCircle className="h-5 w-5 text-secondary" />}
                          {report.status === "pending" && <Clock className="h-5 w-5 text-accent" />}
                          {report.status === "approved" && <AlertCircle className="h-5 w-5 text-primary" />}
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{report.title}</p>
                          <p className="text-sm text-muted-foreground">{report.location} • {report.date}</p>
                        </div>
                      </div>
                      <Badge 
                        variant={report.status === "resolved" ? "default" : report.status === "approved" ? "secondary" : "outline"}
                        className={
                          report.status === "resolved" ? "bg-secondary text-secondary-foreground" :
                          report.status === "approved" ? "bg-primary text-primary-foreground" :
                          "border-accent text-accent"
                        }
                      >
                        {report.status}
                      </Badge>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4" asChild>
                  <Link to="/reports">View All Reports</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Level Progress */}
            <Card className="bg-gradient-card shadow-soft">
              <CardHeader>
                <CardTitle className="text-foreground">Level Progress</CardTitle>
                <CardDescription>Bronze Reporter</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">Level 3</div>
                  <Progress value={65} className="mb-2" />
                  <p className="text-sm text-muted-foreground">650 / 1000 XP to Level 4</p>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="bg-gradient-card shadow-soft">
              <CardHeader>
                <CardTitle className="text-foreground">Achievements</CardTitle>
                <CardDescription>Your civic engagement badges</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {achievements.map((achievement, index) => {
                    const Icon = achievement.icon;
                    return (
                      <div 
                        key={index} 
                        className={`text-center p-3 rounded-lg border ${
                          achievement.earned 
                            ? "bg-accent/10 border-accent/20" 
                            : "bg-muted/10 border-border"
                        }`}
                      >
                        <Icon className={`h-6 w-6 mx-auto mb-2 ${
                          achievement.earned ? "text-accent" : "text-muted-foreground"
                        }`} />
                        <p className={`text-xs ${
                          achievement.earned ? "text-accent" : "text-muted-foreground"
                        }`}>
                          {achievement.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-gradient-card shadow-soft">
              <CardHeader>
                <CardTitle className="text-foreground">Community Impact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Issues Resolved</span>
                  <span className="font-semibold text-foreground">8 / 12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Response Rate</span>
                  <span className="font-semibold text-foreground">92%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Avg. Resolution</span>
                  <span className="font-semibold text-foreground">3.2 days</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;