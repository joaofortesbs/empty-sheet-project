import React, { useState } from 'react';

const RowSteps = ({ defaultStep = 0, steps = [] }) => {
  const [currentStep, setCurrentStep] = useState(defaultStep);

  return (
    <div className="w-full max-w-4xl mx-auto p-6">


      <div className="relative flex items-center justify-between">
        {/* Background progress line */}
        <div className="absolute top-5 h-1 bg-gray-300 rounded-full z-0" style={{ left: '20px', right: '20px' }}></div>
        
        {/* Active progress line */}
        <div 
          className="absolute top-5 h-1 bg-orange-500 rounded-full z-0 transition-all duration-500 ease-out"
          style={{ 
            left: '20px',
            width: `${(currentStep / (steps.length - 1)) * 100}%`
          }}
        ></div>
        {steps.map((step, index) => (
          <div key={index} className="relative z-10 flex flex-col items-center">
            {/* Step Circle */}
            <div
              className={`
                relative flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 cursor-pointer
                ${index < currentStep 
                  ? 'bg-orange-500 border-orange-500 text-white' 
                  : index === currentStep 
                    ? 'bg-white border-orange-500 text-orange-500' 
                    : 'bg-white border-gray-300 text-gray-500 hover:border-gray-400'
                }
              `}
              onClick={() => setCurrentStep(index)}
            >
              {index < currentStep ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                <span className="text-sm font-semibold">{index + 1}</span>
              )}
            </div>

            {/* Step Title */}
            <div className="mt-3">
              <p className={`text-sm font-medium text-center ${index <= currentStep ? 'text-orange-500' : 'text-gray-500'}`}>
                {step.title}
              </p>
            </div>
          </div>
        ))}
      </div>




    </div>
  );
};

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <RowSteps
        defaultStep={1}
        steps={[
          {
            title: "Mensagem",
          },
          {
            title: "Contextualização",
          },
          {
            title: "Plano de Ação",
          },
          {
            title: "Entrega Power",
          },
        ]}
      />
    </div>
  );
}