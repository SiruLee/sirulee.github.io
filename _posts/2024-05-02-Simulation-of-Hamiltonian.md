---
title: Simulating Hamiltonian dynamics with a truncated Taylor Series
author: jiheon_lee
description: Paper by Berry, Childs, Cleve, Kothari, and Somma
date: 2024-05-02 01:05:00 -0400
categories: [Paper Reading, Quantum Physics]
tags: [Quantum Simulation]
math: true
---

## Introduction
The paper introduces a new approach to Hamiltonian simulation with exponentially improved performance compared to the past work[^r1]. The key idea is to decompose the Hamiltonian in to a linear combination of unitary operations and implement Taylor series of the evolution operator. The time evolution is broken up into _segments_ each of which is performed using _oblivious amplitude amplification_. 

## Summary of Method
Suppose we are simulating the time evolution of a finite-dimentional Hamiltonian of the form
$$
\begin{equation}
 H = \sum^L_{l=1}\alpha_lH_l
 \label{eq:linear}
\end{equation}
$$
where each $H_l$ is unitary.
<!-- markdownlint-capture -->
<!-- markdownlint-disable -->
> Any Hamiltonian can be decomposed as a linear combination of unitary matrices.
{: .prompt-tip }
<!-- markdownlint-restore -->
Suppose we wish to simulate the evolution under a Hamiltonian $H$ for time $t$:
$$
\begin{equation}
    U:=\exp{-iHt}
    \label{eq:time}
\end{equation}
$$ within error $\epsilon$. Dividing the evolution time into $r$ segments of length $t/r$, the evolution can be approximated as
$$
\begin{equation}
U_r:=\exp(-iHt/r) \approx \sum^K_{k=0}\frac{1}{k!}(-iHt/r)^k,
\label{eq:taylor}
\end{equation}
$$
where the Taylor series is truncated at order $K$.
<!-- markdownlint-capture -->
<!-- markdownlint-disable -->
> $e^x = \sum^\infty_{i=0}\frac{x^i}{i!}$
{: .prompt-tip }
<!-- markdownlint-restore -->
Here, we can achieve the accuracy of each segment to $\epsilon/r$ by choosing 
$$
\begin{equation}
    K = O\left(\frac{\log{r/\epsilon}}{\log{\log{r/\epsilon}}}\right)
    \label{eq:K}
\end{equation}
$$

### Oblivious Amplitude Amplification
To read more about the process, I assign the future reading[^r1]. It essentially enables deterministic implementation of a sum of unitary operators.

Although the powers of $H$ are not themselves unitary, we can expand \eqref{eq:taylor} as following using \eqref{eq:linear}:
$$
\begin{equation}
  U_r \approx \sum^K_{k=0} \sum^L_{l_1,\ldots,l_k=1}\frac{(-it/r)^k}{k!}\alpha_{l_1}\cdots\alpha_{l_k}H_{l_1}\cdots H_{l_k}
  \label{eq:expansion}
\end{equation}
$$
<!-- markdownlint-capture -->
<!-- markdownlint-disable -->
> How did the expansion goes?
{: .prompt-info }
<!-- markdownlint-restore -->

Now notice that the \eqref{eq:expansion} is in the form
$$
\begin{equation}
\tilda{U} = \sum^{m-1}_{j=0}\beta_j V_j
\label{eq:unitary-form}
\end{equation}
$$
where $\beta_j>0$ and each $V_j$ is a unitary that corresponds to some $(-i)^kH_{l_1}\cdots H_{l_k}.

### Sum of Unitary Operators
The procedure follows as if the entire sum were unitary. While the sum is not exactly unitary, it is close to unitary upto the bounded error.

The mechanism for implementing each unitary $V_j$ in \eqref{eq:unitary-form} follows by defining unitary operations 'prep' and 'select':
$$
\begin{equation}
    \text{select}(V)\bra{j}\bra{\psi} = \bra{j}V_j\bra{\psi},
    \label{eq:select}
\end{equation}
$$ for any $j\in\{0, 1, \ldots, m - 1\} and any state $\bra{\psi}$.
'prep' is an $m$-dimensional unitary,
$$
\begin{equation}
    \text{prep}\bra{0} = \frac{1}{\sqrt{s}}\sum^{m-1}_{j=0}\sqrt{\beta_j}\bra{j},
    \label{eq:prep}
\end{equation}
$$
where $s$ is a normalization constant defined as $s:=\sum^{m-1}_{j=0}\beta_j$.

Now define 
$$
\begin{equation}
    W:=(\text{prep}^\dagger\otimes \mathbb{I})(\text{select(V)})(\text{prep}\otimes \mathbb{I})
    \label{eq:W}
\end{equation}
$$
[^r1]: D. W. Berry, A. M. Childs, R. Cleve, R. Kothari, and R.D. Somma, in Proc. 46th ACM Symposium on Theory of Computing, pp. 283–292 (2014).