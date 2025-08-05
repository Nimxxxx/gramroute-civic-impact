import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Trophy, 
  Medal, 
  Award, 
  Star,
  TrendingUp,
  Calendar,
  Users,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";

const Leaderboard = () => {
  const weeklyLeaders = [
    { rank: 1, name: "Sarah Chen", university: "Tech University", points: 850, reports: 12, avatar: "/api/placeholder/40/40" },
    { rank: 2, name: "Alex Kumar", university: "State College", points: 720, reports: 9, avatar: "/api/placeholder/40/40" },
    { rank: 3, name: "Maria Rodriguez", university: "City University", points: 680, reports: 8, avatar: "/api/placeholder/40/40" },
    { rank: 4, name: "John Smith", university: "Community College", points: 590, reports: 7, avatar: "/api/placeholder/40/40" },
    { rank: 5, name: "Emma Wilson", university: "Metro University", points: 520, reports: 6, avatar: "/api/placeholder/40/40" },
  ];

  const monthlyLeaders = [
    { rank: 1, name: "Alex Kumar", university: "State College", points: 2850, reports: 42, avatar: "/api/placeholder/40/40" },
    { rank: 2, name: "Sarah Chen", university: "Tech University", points: 2720, reports: 38, avatar: "/api/placeholder/40/40" },
    { rank: 3, name: "David Park", university: "Engineering School", points: 2580, reports: 35, avatar: "/api/placeholder/40/40" },
  ];

  const topUniversities = [
    { rank: 1, name: "State College", reports: 156, students: 45 },
    { rank: 2, name: "Tech University", reports: 142, students: 38 },
    { rank: 3, name: "City University", reports: 128, students: 42 },
    { rank: 4, name: "Metro University", reports: 95, students: 28 },
    { rank: 5, name: "Community College", reports: 87, students: 25 },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-6 w-6 text-yellow-500" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Award className="h-6 w-6 text-yellow-600" />;
      default:
        return <span className="text-lg font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  const getRankBadge = (rank: number) => {
    if (rank === 1) return "bg-yellow-100 text-yellow-800 border-yellow-200";
    if (rank === 2) return "bg-gray-100 text-gray-800 border-gray-200";
    if (rank === 3) return "bg-orange-100 text-orange-800 border-orange-200";
    return "bg-muted text-muted-foreground";
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
              <Trophy className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-foreground">Leaderboard</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-card shadow-soft">
            <CardContent className="p-6 text-center">
              <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">2,547</div>
              <div className="text-muted-foreground">Active Reporters</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card shadow-soft">
            <CardContent className="p-6 text-center">
              <div className="p-3 bg-accent/10 rounded-full w-fit mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">8,924</div>
              <div className="text-muted-foreground">Total Reports</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card shadow-soft">
            <CardContent className="p-6 text-center">
              <div className="p-3 bg-secondary/10 rounded-full w-fit mx-auto mb-4">
                <Trophy className="h-8 w-8 text-secondary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">7,156</div>
              <div className="text-muted-foreground">Issues Resolved</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="weekly" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-fit">
            <TabsTrigger value="weekly" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Weekly
            </TabsTrigger>
            <TabsTrigger value="monthly" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Monthly
            </TabsTrigger>
            <TabsTrigger value="universities" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Universities
            </TabsTrigger>
          </TabsList>

          <TabsContent value="weekly" className="space-y-6">
            <Card className="bg-gradient-card shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Trophy className="h-6 w-6 text-primary" />
                  Top Weekly Reporters
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {weeklyLeaders.map((leader, index) => (
                    <div 
                      key={leader.rank} 
                      className={`flex items-center justify-between p-4 rounded-lg border transition-all hover:shadow-soft ${
                        leader.rank <= 3 ? 'bg-accent/5 border-accent/20' : 'bg-background border-border'
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-10 h-10">
                          {getRankIcon(leader.rank)}
                        </div>
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={leader.avatar} />
                          <AvatarFallback>{leader.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-foreground">{leader.name}</p>
                          <p className="text-sm text-muted-foreground">{leader.university}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-3">
                          <div className="text-right">
                            <p className="font-bold text-lg text-foreground">{leader.points}</p>
                            <p className="text-sm text-muted-foreground">{leader.reports} reports</p>
                          </div>
                          <Badge className={getRankBadge(leader.rank)}>
                            #{leader.rank}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="monthly" className="space-y-6">
            <Card className="bg-gradient-card shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Star className="h-6 w-6 text-primary" />
                  Monthly Champions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {monthlyLeaders.map((leader) => (
                    <div 
                      key={leader.rank} 
                      className="flex items-center justify-between p-6 rounded-lg bg-accent/5 border border-accent/20"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-12 h-12">
                          {getRankIcon(leader.rank)}
                        </div>
                        <Avatar className="h-14 w-14">
                          <AvatarImage src={leader.avatar} />
                          <AvatarFallback>{leader.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-bold text-lg text-foreground">{leader.name}</p>
                          <p className="text-muted-foreground">{leader.university}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-2xl text-foreground">{leader.points}</p>
                        <p className="text-muted-foreground">{leader.reports} reports this month</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="universities" className="space-y-6">
            <Card className="bg-gradient-card shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Users className="h-6 w-6 text-primary" />
                  Top Universities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topUniversities.map((university) => (
                    <div 
                      key={university.rank} 
                      className="flex items-center justify-between p-4 rounded-lg bg-background border border-border hover:shadow-soft transition-all"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                          <span className="font-bold text-primary">#{university.rank}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-lg text-foreground">{university.name}</p>
                          <p className="text-sm text-muted-foreground">{university.students} active students</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-xl text-foreground">{university.reports}</p>
                        <p className="text-sm text-muted-foreground">reports</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Your Rank */}
        <Card className="bg-gradient-hero shadow-medium">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-card/20 rounded-lg">
                  <Trophy className="h-8 w-8 text-card" />
                </div>
                <div>
                  <p className="text-card text-lg font-semibold">Your Current Rank</p>
                  <p className="text-card/80">Keep reporting to climb higher!</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-accent">#15</p>
                <p className="text-card/80">1,250 points</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Leaderboard;