
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
    <div className="min-h-screen bg-orange-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Manage Your Finances
          </h1>
        </div>

        {/* Financial Values Display */}
        <Card className="mb-6 bg-red-50 border-2 border-red-200">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Wallet className="w-8 h-8 text-gray-800 mr-2" />
                  <p className="text-3xl font-bold text-gray-800">${currentBalance}</p>
                </div>
                <p className="text-sm text-gray-600 mt-1">Current Balance</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="w-8 h-8 text-green-600 mr-2" />
                  <p className="text-3xl font-bold text-green-600">+800</p>
                </div>
                <p className="text-sm text-gray-600 mt-1">Monthly Income</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingDown className="w-8 h-8 text-red-600 mr-2" />
                  <p className="text-3xl font-bold text-red-600">-300</p>
                </div>
                <p className="text-sm text-gray-600 mt-1">Monthly Expenses</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Status Card */}
        <Card className="mb-6 bg-red-50 border-2 border-red-200">
          <CardContent className="p-6 text-center">
            <div className="pb-4 border-b-2 border-gray-400 mb-4">
              <div className="flex items-center justify-center mb-2">
                <User className="w-6 h-6 text-gray-800 mr-2" />
                <p className="text-xl">
                  <strong>Your Status:</strong> Student (21)
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Target className="w-6 h-6 text-gray-800 mr-2" />
              <p className="text-xl">
                <strong>Goal:</strong> Save $5,000
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Decision Card */}
        <Card className="mb-6 bg-red-50 border-2 border-red-200">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center mb-6">
              <Laptop className="w-6 h-6 text-gray-800 mr-2" />
              <p className="text-xl">
                <strong>Decision:</strong><br />
                Buy a laptop for $1,200?
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => handleDecision('yes')}
                className="bg-white text-gray-800 border-2 border-gray-400 hover:bg-orange-50 text-lg px-8 py-3"
                variant="outline"
              >
                YES
              </Button>
              <Button 
                onClick={() => handleDecision('no')}
                className="bg-white text-gray-800 border-2 border-gray-400 hover:bg-orange-50 text-lg px-8 py-3"
                variant="outline"
              >
                NO
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Feedback Card */}
        <Card className="bg-red-50 border-2 border-red-200">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center mb-2">
              <MessageCircle className="w-6 h-6 text-gray-800 mr-2" />
              <p className="text-xl">
                <strong>Feedback:</strong>
              </p>
            </div>
            <p className="text-lg">
              {feedback}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
