describe('Pomodoro', function () {

    it('Deve pegar o tempo estimado', function () {
        var time = Math.floor(Math.random() * 100);
        expect(clock.getEstimatedTime(time)).toEqual(time * 60);
    });

    it('Deve retornar um erro quando um número for maior que 1 hora', function () {
        expect(clock.getTimer(3600)).toBe(undefined);
    });

    it('Deve retornar uma string com o tempo do relógio', function () {
        expect(clock.getTimer(3599)).toEqual('59:59');
        expect(clock.getTimer(3540)).toEqual('59:00');
        expect(clock.getTimer(60)).toEqual('01:00');
        expect(clock.getTimer(59)).toEqual('00:59');
        expect(clock.getTimer(1)).toEqual('00:01');
        expect(clock.getTimer(0)).toEqual('00:00');
    });
});
