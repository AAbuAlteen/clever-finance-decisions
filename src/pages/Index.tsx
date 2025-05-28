
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { Wallet, TrendingUp, TrendingDown, User, Target, Laptop, MessageCircle } from 'lucide-react';

const Index = () => {
  const [feedback, setFeedback] = useState("You spent more than your income. Try saving more before big purchases.");
  const [currentBalance, setCurrentBalance] = useState(2500);
  const [balanceHistory, setBalanceHistory] = useState([
    { month: 'Jan', balance: 2000 },
    { month: 'Feb', balance: 2200 },
    { month: 'Mar', balance: 2400 },
    { month: 'Apr', balance: 2500 }
  ]);

  const chartConfig = {
    balance: {
      label: "Balance",
      color: "hsl(45, 93%, 47%)"
    }
  };

  const handleDecision = (choice: 'save' | 'finance' | 'buy') => {
    const newBalance = choice === 'save' ? currentBalance : currentBalance - 1200;
    
    if (choice === 'save') {
      setFeedback("Excellent choice! Waiting and saving up shows great financial discipline. You'll avoid debt and interest payments.");
    } else if (choice === 'finance') {
      setCurrentBalance(newBalance);
      setBalanceHistory(prev => [...prev, { month: 'May', balance: newBalance }]);
      setFeedback("You chose to finance the laptop. While you got what you needed, be mindful of the monthly payments and interest costs.");
    } else if (choice === 'buy') {
      setCurrentBalance(newBalance);
      setBalanceHistory(prev => [...prev, { month: 'May', balance: newBalance }]);
      setFeedback("You bought the laptop outright! Good choice if you had enough savings, but watch your remaining budget carefully.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-2">
            Manage Your Finances
          </h1>
          <div className="w-24 h-1 bg-amber-400 mx-auto rounded-full"></div>
        </div>

        {/* Financial Values Display */}
        <Card className="mb-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <div className="bg-amber-100 p-3 rounded-full mr-3">
                    <Wallet className="w-8 h-8 text-amber-700" />
                  </div>
                  <p className="text-3xl font-bold text-gray-800">${currentBalance}</p>
                </div>
                <p className="text-sm text-gray-600 font-medium">Current Balance</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <div className="bg-emerald-100 p-3 rounded-full mr-3">
                    <TrendingUp className="w-8 h-8 text-emerald-700" />
                  </div>
                  <p className="text-3xl font-bold text-emerald-700">+800</p>
                </div>
                <p className="text-sm text-gray-600 font-medium">Monthly Income</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <div className="bg-rose-100 p-3 rounded-full mr-3">
                    <TrendingDown className="w-8 h-8 text-rose-700" />
                  </div>
                  <p className="text-3xl font-bold text-rose-700">-300</p>
                </div>
                <p className="text-sm text-gray-600 font-medium">Monthly Expenses</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Status Card with Graph */}
        <Card className="mb-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="pb-6 border-b border-amber-200 mb-6">
                  <div className="flex items-center justify-center mb-2">
                    <div className="bg-amber-100 p-2 rounded-full mr-3">
                      <User className="w-6 h-6 text-amber-700" />
                    </div>
                    <p className="text-xl text-gray-800">
                      <span className="font-semibold text-amber-800">Your Status:</span> Student (21)
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="bg-amber-100 p-2 rounded-full mr-3">
                    <Target className="w-6 h-6 text-amber-700" />
                  </div>
                  <p className="text-xl text-gray-800">
                    <span className="font-semibold text-amber-800">Goal:</span> Save $5,000
                  </p>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-amber-800 mb-4">Balance Over Time</h3>
                <div className="h-48">
                  <ChartContainer config={chartConfig}>
                    <LineChart data={balanceHistory}>
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line 
                        type="monotone" 
                        dataKey="balance" 
                        stroke="var(--color-balance)" 
                        strokeWidth={3}
                        dot={{ fill: "var(--color-balance)", strokeWidth: 2, r: 4 }}
                      />
                    </LineChart>
                  </ChartContainer>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Decision Card */}
        <Card className="mb-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-amber-100 p-2 rounded-full mr-3">
                <Laptop className="w-6 h-6 text-amber-700" />
              </div>
              <p className="text-xl text-gray-800">
                <span className="font-semibold text-amber-800">Scenario:</span>
              </p>
            </div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Your laptop just broke and you need a new one for school. You found a good laptop for $1,200. 
              You have enough money saved, but it would use almost half of your current balance. What do you do?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => handleDecision('save')}
                className="bg-emerald-500 hover:bg-emerald-600 text-white border-0 text-base px-6 py-3 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl"
              >
                Wait & Save More
              </Button>
              <Button 
                onClick={() => handleDecision('finance')}
                className="bg-amber-500 hover:bg-amber-600 text-white border-0 text-base px-6 py-3 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl"
              >
                Finance It
              </Button>
              <Button 
                onClick={() => handleDecision('buy')}
                className="bg-orange-500 hover:bg-orange-600 text-white border-0 text-base px-6 py-3 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl"
              >
                Buy Now
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Feedback Card */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-amber-100 p-2 rounded-full mr-3">
                <MessageCircle className="w-6 h-6 text-amber-700" />
              </div>
              <p className="text-xl text-gray-800">
                <span className="font-semibold text-amber-800">Feedback:</span>
              </p>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              {feedback}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
