import type { PrioridadeTask, TypeTask } from "../../api/task/type";

const getTaskColor = (type?: TypeTask) => {
  switch (type) {
    case "PROFISSIONAL":
      return "#ffecb3"; // Amarelo para profissional
    case "PESSOAL":
      return "#c8e6c9"; // Verde para pessoal
    default:
      return "#f5f5f5"; // Branco para não especificado
  }
};

// Cores para prioridade (atualizado)
const getPriorityColor = (prioridade?: PrioridadeTask) => {
  switch (prioridade) {
    case "URGENTE":
      return "#ff5252"; // Vermelho
    case "IMPORTANTE":
      return "#ff9800"; // Laranja
    case "NORMAL":
      return "#4caf50"; // Verde
    default:
      return "#9e9e9e"; // Cinza
  }
};

// Mapeamento de prioridade para texto completo
const getPriorityText = (prioridade?: PrioridadeTask) => {
  switch (prioridade) {
    case "URGENTE":
      return "Urgente";
    case "IMPORTANTE":
      return "Importante";
    case "NORMAL":
      return "Normal";
    default:
      return "Sem prioridade";
  }
};

// Mapeamento de tipo para texto completo
const getTypeText = (type?: TypeTask) => {
  switch (type) {
    case "PROFISSIONAL":
      return "Profissional";
    case "PESSOAL":
      return "Pessoal";
    default:
      return "Geral";
  }
};

export { getPriorityColor, getPriorityText, getTaskColor, getTypeText };
