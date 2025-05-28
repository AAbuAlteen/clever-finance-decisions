
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
                <p className="text-3xl font-bold text-gray-800">${currentBalance}</p>
                <p className="text-sm text-gray-600 mt-1">Current Balance</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">+800</p>
                <p className="text-sm text-gray-600 mt-1">Monthly Income</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-red-600">-300</p>
                <p className="text-sm text-gray-600 mt-1">Monthly Expenses</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Status Card */}
        <Card className="mb-6 bg-red-50 border-2 border-red-200">
          <CardContent className="p-6 text-center">
            <div className="pb-4 border-b-2 border-gray-400 mb-4">
              <p className="text-xl">
                <strong>Your Status:</strong> Student (21)
              </p>
            </div>
            <p className="text-xl">
              <strong>Goal:</strong> Save $5,000
            </p>
          </CardContent>
        </Card>

        {/* Decision Card */}
        <Card className="mb-6 bg-red-50 border-2 border-red-200">
          <CardContent className="p-6 text-center">
            <p className="text-xl mb-6">
              <strong>Decision:</strong><br />
              Buy a laptop for $1,200?
            </p>
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
            <p className="text-xl">
              <strong>Feedback:</strong><br />
              {feedback}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
