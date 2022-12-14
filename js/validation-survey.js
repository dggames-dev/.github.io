const validation = new JustValidate("#survey");

validation
    .addField("#rating", [
        {
            rule: "required"
        }
    ])
    .addField("#feedback", [
        {
            rule: "required"
        }
    ])
    .addField("#email", [
        {
            rule: "required"
        },
        {
            rule: "email"
        }
    ]);