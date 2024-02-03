import { Component, OnInit } from '@angular/core';
import { of, map, mergeMap, interval, Subscription, Subject, tap, concatMap, take } from 'rxjs';


@Component({
  selector: 'app-ngrx-shop',
  templateUrl: './Rxjs-shop.component.html',
  styleUrls: ['./Rxjs-shop.component.scss']
})
export class RxjsShopComponent implements OnInit {
  subscriber?: Subscription;

  constructor() { }

  ngOnInit(): void {
  }

  stop() {
    this.subscriber?.unsubscribe();
    console.log('===Stop===')
  }


  // the main entry
  runTest(): void {
    this.tryMergeMap();
    // this.trySubject();
   // this.tryTap_2();
  }

  try1(): void {
    this.subscriber = of(1, 2, 3).pipe(map(x => x + '!!!')).subscribe(
      a => console.log(a)
    )
  }

  tryMergeMap(): void {
    const letters = of('a', 'b', 'c');
    const result = letters.pipe(
      mergeMap(x => interval(1000).pipe(map(i => x + i))),
    );
    this.subscriber = result.subscribe(x => console.log(x));
  }

  trySubject(): void {
    // 创建subject
    const subject = new Subject();

    // 订阅一个observer
    subject.subscribe(v => console.log("stream 1", v));
    // 再订阅一个observer
    subject.subscribe(v => console.log("stream 2", v));
    // 延时1s再订阅一个observer
    setTimeout(() => {
      subject.subscribe(v => console.log("stream 3", v));
    }, 1000);
    // 产生数据1
    subject.next('next 1');
    // 产生数据2
    subject.next('next 2');
    // 延时3s产生数据3
    setTimeout(() => {
      subject.next('next 3');
    }, 3000);
  }

  tryTap_1() {
    const source = of(1, 2, 3, 4, 5)

    source.pipe(
      tap(n => {
        if (n > 3) {
          throw new TypeError(`Value ${n} is greater than 3`)
        }
      })
    ).subscribe(console.log);
  }

  tryTap_2() {
    of(1, 2, 3).pipe(
      concatMap(n => interval(1000).pipe(
        take(Math.round(Math.random() * 10)),
        map(() => 'X'),
        tap({
          complete: () => console.log(`Done with ${n}`)
        })
      ))
     )
     .subscribe(console.log);
  }

}
