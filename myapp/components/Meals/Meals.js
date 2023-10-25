'use client'
import React, { useState, useEffect } from 'react';



const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [expandedMeal, setExpandedMeal] = useState(null);
  
    useEffect(() => {
      fetch('http://localhost:3000/api/fooditem')
        .then((response) => response.json())
        .then((data) => setMeals(data))
        .catch((error) => console.error('Error fetching meals:', error));
    }, []);
  
    const toggleAccordion = (index) => {
      if (expandedMeal === index) {
        setExpandedMeal(null);
      } else {
        setExpandedMeal(index);
      }
    };
  return (
    <section>
        <h2 className='text-center text-2xl'>Meals</h2>
    {meals.map((meal, index) => (
        <div key={index} className="border border-gray-200 rounded p-2 my-2">
            <div
                className="flex justify-between cursor-pointer"
                onClick={() => toggleAccordion(index)}
            >
                <p className="text-xl font-bold">{meal.name}</p>
                <p className="text-xl">${meal.price.toFixed(2)}</p>
            </div>
            {expandedMeal === index && (
                <div className="mt-2">
                    <ul>
                        {meal.extraOptions.map((option, optionIndex) => (
                            <li key={optionIndex} className="flex justify-between">
                                <span>{option.text}</span>
                                <span>${option.price.toFixed(2)}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    ))}
</section>
  )
}

export default Meals