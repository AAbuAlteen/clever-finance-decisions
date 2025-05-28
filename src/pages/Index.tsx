
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wallet, TrendingUp, TrendingDown, User, Target, Laptop, MessageCircle } from 'lucide-react';

const Index = () => {
  const [feedback, setFeedback] = useState("You spent more than your income. Try saving more before big purchases.");
  const [currentBalance, setCurrentBalance] = useState(2500);

  const handleDecision = (decision: 'yes' | 'no') => {
    if (decision === 'yes') {
      setCurrentBalance(prev => prev - 1200);
      setFeedback("You bought the laptop! Your balance decreased. Consider your budget carefully for future purchases.");
    } else {
      setFeedback("Good choice! Saving money is wise. You avoided an unnecessary expense and kept your financial goals on track.");
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

        {/* Status Card */}
        <Card className="mb-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardContent className="p-8 text-center">
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
          </CardContent>
        </Card>

        {/* Decision Card */}
        <Card className="mb-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-amber-100 p-2 rounded-full mr-3">
                <Laptop className="w-6 h-6 text-amber-700" />
              </div>
              <p className="text-xl text-gray-800">
                <span className="font-semibold text-amber-800">Decision:</span><br />
                Buy a laptop for $1,200?
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => handleDecision('yes')}
                className="bg-amber-500 hover:bg-amber-600 text-white border-0 text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl"
              >
                YES
              </Button>
              <Button 
                onClick={() => handleDecision('no')}
                className="bg-orange-500 hover:bg-orange-600 text-white border-0 text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl"
                variant="outline"
              >
                NO
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
