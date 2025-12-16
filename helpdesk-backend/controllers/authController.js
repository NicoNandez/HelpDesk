const users = require("../data/users.json");

exports.login = (req, res) => {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email);
    if (!user)
        return res.status(404).json({ message: "Usuario no encontrado" });

    if (password !== user.password)
        return res.status(401).json({ message: "Contraseña incorrecta" });

    res.json({
        message: "Login exitoso",
        user: { id: user.id, name: user.name, role: user.role }
    });
};

exports.register = (req, res) => {
    const { name, email, password } = req.body;

    const exists = users.find(u => u.email === email);
    if (exists)
        return res.status(409).json({ message: "El usuario ya existe" });

    const newUser = {
        id: users.length + 1,
        name,
        email,
        password,
        role: "user"
    };

    users.push(newUser);

    res.status(201).json({
        message: "Usuario registrado",
        user: { id: newUser.id, name, email, role: newUser.role }
    });
};", user: newUser });
    };
