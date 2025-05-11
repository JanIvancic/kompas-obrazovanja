const API_URL = 'http://localhost:5201/api';

// Get all schools
export const getSchools = async () => {
  try {
    const response = await fetch(`${API_URL}/schools`);
    if (!response.ok) {
      throw new Error('Failed to fetch schools');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching schools:', error);
    throw error;
  }
};

// Get a single school by ID
export const getSchoolById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/schools/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch school with ID ${id}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching school with ID ${id}:`, error);
    throw error;
  }
};

// Get schools by county
export const getSchoolsByCounty = async (county) => {
  try {
    const response = await fetch(`${API_URL}/schools/county/${county}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch schools in county ${county}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching schools in county ${county}:`, error);
    throw error;
  }
};

// Get schools by city
export const getSchoolsByCity = async (city) => {
  try {
    const response = await fetch(`${API_URL}/schools/city/${city}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch schools in city ${city}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching schools in city ${city}:`, error);
    throw error;
  }
};