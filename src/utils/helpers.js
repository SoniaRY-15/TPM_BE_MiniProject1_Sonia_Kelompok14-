const formatPetList = (pets) =>
  pets.map((pet) => ({
    id: pet.id,
    name: pet.name,
    type: pet.type,
    age: formatAge(pet.age),
    reason: pet.reason,
  }));

const formatAge = (age) => {
  if (!age) return "";
  let str = [];
  if (age.years) str.push(`${age.years} year${age.years > 1 ? "s" : ""}`);
  if (age.months) str.push(`${age.months} month${age.months > 1 ? "s" : ""}`);
  return str.length ? str.join(" ") : "Unknown";
};

module.exports = { formatPetList };
