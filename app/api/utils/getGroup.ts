import { prisma } from "@/lib/prisma";

export const getGroup = async (student_id: number) => {
    // Ejemplo si tu modelo se llama "student" y tiene la relación "group"
    const student = await prisma.usuario.findUnique({
        where: { id_usuario: student_id },
        include: { grupo: true },
    });

    return student?.grupo?.nombre ?? null;
};