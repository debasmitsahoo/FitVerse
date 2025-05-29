"use client"

import { useState } from "react"

export default function BMICalculator() {
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [bmi, setBmi] = useState<number | null>(null)
  const [category, setCategory] = useState("")

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = parseFloat(height) / 100
      const weightInKg = parseFloat(weight)
      const bmiValue = weightInKg / (heightInMeters * heightInMeters)
      setBmi(parseFloat(bmiValue.toFixed(1)))

      // Determine BMI category
      if (bmiValue < 18.5) {
        setCategory("Underweight")
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setCategory("Normal weight")
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setCategory("Overweight")
      } else {
        setCategory("Obese")
      }
    }
  }

  return (
    <div className="bg-[#111] p-8 rounded-[20px] border border-transparent shadow-[0_0_5px_#45ffca] transition-all duration-500 hover:border-[#45ffca]">
      <h3 className="text-[2.4rem] font-bold text-[#45ffca] mb-6">BMI Calculator</h3>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="height" className="block text-[1.6rem] text-gray-300 mb-2">
            Height (cm)
          </label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full p-4 bg-black/50 border-2 border-[#45ffca]/20 rounded-lg focus:border-[#45ffca] focus:outline-none text-white text-[1.6rem] transition-all duration-300"
            placeholder="Enter your height"
          />
        </div>

        <div>
          <label htmlFor="weight" className="block text-[1.6rem] text-gray-300 mb-2">
            Weight (kg)
          </label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full p-4 bg-black/50 border-2 border-[#45ffca]/20 rounded-lg focus:border-[#45ffca] focus:outline-none text-white text-[1.6rem] transition-all duration-300"
            placeholder="Enter your weight"
          />
        </div>

        <button
          onClick={calculateBMI}
          className="w-full py-4 px-6 bg-[#45ffca] text-black text-[1.6rem] font-bold rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_#45ffca] hover:bg-[#45ffca]/90"
        >
          Calculate BMI
        </button>

        {bmi !== null && (
          <div className="mt-6 p-6 bg-black/50 rounded-lg border border-[#45ffca]/20">
            <div className="text-center">
              <p className="text-[1.6rem] text-gray-300 mb-2">Your BMI</p>
              <p className="text-[3.6rem] font-bold text-[#45ffca] mb-2">{bmi}</p>
              <p className="text-[1.6rem] text-gray-300">Category: {category}</p>
            </div>
          </div>
        )}

        <div className="mt-6 text-[1.4rem] text-gray-400">
          <p className="mb-2">BMI Categories:</p>
          <ul className="space-y-1">
            <li>Underweight: BMI less than 18.5</li>
            <li>Normal weight: BMI 18.5-24.9</li>
            <li>Overweight: BMI 25-29.9</li>
            <li>Obese: BMI 30 or higher</li>
          </ul>
        </div>
      </div>
    </div>
  )
} 