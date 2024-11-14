"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Users,
  Activity,
  Settings,
  PlusCircle,
  Bell,
  Target,
  Sparkles,
  DollarSign,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

export default function Dashboard() {
  const [showNewCampaign, setShowNewCampaign] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background">
      {/* Sidebar */}
      <div className="fixed w-64 h-screen bg-white dark:bg-card border-r">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-purple-600">Tehify</h2>
        </div>
        <nav className="mt-6">
          {sidebarItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-purple-50 dark:hover:bg-purple-900/20"
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Ad Campaign Dashboard</h1>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button 
              className="bg-purple-600 hover:bg-purple-700"
              onClick={() => setShowNewCampaign(true)}
            >
              <PlusCircle className="h-5 w-5 mr-2" /> New Campaign
            </Button>
          </div>
        </div>

        {/* New Campaign Form */}
        {showNewCampaign && (
          <Card className="mb-8 border-purple-200 dark:border-purple-800">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Sparkles className="h-5 w-5 text-purple-600 mr-2" />
                Create New Campaign
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">
                      Campaign Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 rounded-md border border-gray-200 dark:border-gray-800"
                      placeholder="Enter campaign name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">
                      Target Audience
                    </label>
                    <select className="w-full p-2 rounded-md border border-gray-200 dark:border-gray-800">
                      <option>Select audience</option>
                      <option>Young Adults (18-24)</option>
                      <option>Adults (25-34)</option>
                      <option>Professionals (35-44)</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">
                      Budget
                    </label>
                    <input
                      type="number"
                      className="w-full p-2 rounded-md border border-gray-200 dark:border-gray-800"
                      placeholder="Enter budget"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">
                      Duration
                    </label>
                    <select className="w-full p-2 rounded-md border border-gray-200 dark:border-gray-800">
                      <option>Select duration</option>
                      <option>1 week</option>
                      <option>2 weeks</option>
                      <option>1 month</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-6 space-x-4">
                <Button
                  variant="outline"
                  onClick={() => setShowNewCampaign(false)}
                >
                  Cancel
                </Button>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Create Campaign
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.name}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Active Campaigns */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Active Campaigns</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {campaigns.map((campaign, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center">
                    <div
                      className={`w-2 h-2 rounded-full mr-4 ${campaign.color}`}
                    />
                    <div>
                      <p className="font-medium">{campaign.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {campaign.status}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="font-medium">{campaign.budget}</p>
                      <p className="text-sm text-muted-foreground">Budget</p>
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

const sidebarItems = [
  { name: "Dashboard", icon: BarChart, href: "/dashboard" },
  { name: "Campaigns", icon: Target, href: "/dashboard/campaigns" },
  { name: "Analytics", icon: Activity, href: "/dashboard/analytics" },
  { name: "Settings", icon: Settings, href: "/dashboard/settings" },
];

const stats = [
  {
    name: "Active Campaigns",
    value: "12",
    change: "+2.5%",
    icon: Target,
  },
  {
    name: "Total Reach",
    value: "854K",
    change: "+14.2%",
    icon: Users,
  },
  {
    name: "Conversion Rate",
    value: "3.2%",
    change: "+0.8%",
    icon: TrendingUp,
  },
  {
    name: "Total Spend",
    value: "$12.4K",
    change: "+5.4%",
    icon: DollarSign,
  },
];

const campaigns = [
  {
    name: "Summer Sale 2024",
    status: "Running - Day 12 of 30",
    budget: "$5,000",
    color: "bg-green-500",
  },
  {
    name: "New Product Launch",
    status: "Starting Tomorrow",
    budget: "$10,000",
    color: "bg-blue-500",
  },
  {
    name: "Brand Awareness",
    status: "Running - Day 5 of 14",
    budget: "$3,000",
    color: "bg-purple-500",
  },
];