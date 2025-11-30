module.exports = (req, res, next) => {
  let { name, type, age, reason, ageYears, ageMonths } = req.body;

  if (!age && (ageYears !== undefined || ageMonths !== undefined)) {
    age = {
      years: Number(ageYears) || 0,
      months: Number(ageMonths) || 0,
    };
  } else if (typeof age === "string") {
    try {
      age = JSON.parse(age);
    } catch {
      return res
        .status(400)
        .json({ message: "Age field is incorrectly formatted." });
    }
  }

  if (!name || !type || !reason) {
    return res
      .status(400)
      .json({ message: "All fields (name, type, age, reason) are required." });
  }
  if (
    typeof name !== "string" ||
    typeof type !== "string" ||
    typeof reason !== "string"
  ) {
    return res
      .status(400)
      .json({ message: "Name, type, and reason must be strings." });
  }
  if (
    !age ||
    typeof age.years === "undefined" ||
    typeof age.months === "undefined"
  ) {
    return res
      .status(400)
      .json({ message: "Age must include both years and months." });
  }
  if (
    isNaN(Number(age.years)) ||
    Number(age.years) < 0 ||
    isNaN(Number(age.months)) ||
    Number(age.months) < 0 ||
    Number(age.months) > 11
  ) {
    return res
      .status(400)
      .json({ message: "Age must be years >= 0, months 0-11." });
  }

  req.body.age = { years: Number(age.years), months: Number(age.months) };

  next();
};
