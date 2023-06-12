const dia = document.getElementById("dia");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
const lancamento = "05 jan 2024";

function countDown() {
  const dataLance = new Date(lancamento);
  const hoje = new Date();

  const segundosTotal = (dataLance - hoje) / 1000;

  const finalDias = Math.floor(segundosTotal / 60 / 60 / 24);
  const finalHoras = Math.floor(segundosTotal / 60 / 60) % 24;
  const finalMinutos = Math.floor(segundosTotal / 60) % 60;
  const finalSegundos = Math.floor(segundosTotal) % 60;

  dia.innerHTML = finalDias;
  horas.innerHTML = formatoTempo(finalHoras);
  minutos.innerHTML = formatoTempo(finalMinutos);
  segundos.innerHTML = formatoTempo(finalSegundos);
}

function formatoTempo(tempo) {
  return tempo < 10 ? `0${tempo}` : tempo;
}

countDown();
setInterval(countDown, 1000);
