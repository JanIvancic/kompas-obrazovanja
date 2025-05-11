const API_URL = 'http://localhost:5201/api';

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